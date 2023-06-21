const fs = require('fs');
const yaml = require('js-yaml');
const nbt = require('nbt');
const {Buffer} = require('buffer');
const {transformedArray} = require("./item_name_data");

const saveData = fs.readFileSync('save.yml', 'utf8');
const cleanedData = saveData.replace(/^\s*data-version:.*(\r?\n)/, '');
const parsedData = yaml.load(cleanedData);

async function selectData(data) {
  const selectedData = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const dataObj = data[key];
      const offers = dataObj.offers || {};
      const offerKeys = Object.keys(offers);

      function parseInternal(internal) {
        const base64Decoded = Buffer.from(internal, 'base64');

        return new Promise((resolve, reject) => {
          nbt.parse(base64Decoded, (error, data) => {
            if (error) {
              reject(error);
              return;
            }

            const items = data.value.BlockEntityTag && data.value.BlockEntityTag.value && data.value.BlockEntityTag.value.Items && data.value.BlockEntityTag.value.Items.value ? data.value.BlockEntityTag.value.Items.value.value : [];

            const result = items.map((item) => {
              const slot = item.Slot.value;
              const id = item.id.value.split(':')[1];
              const matchingItem1Data = id ? transformedArray.filter((item) => item.type === id.toLowerCase()) : [];
              const id_ru = matchingItem1Data[0].item_name_ru
              const count = item.Count.value;
              return {slot, id, id_ru, count};
            });

            resolve(result);
          });
        });
      }

      const selectedObj = {
        shop_id: key,
        x: dataObj.x,
        y: dataObj.y,
        z: dataObj.z,
        name: dataObj.name,
        owner: dataObj.owner,
        object_profession: dataObj.object ? dataObj.object.profession : null,
        object_villager_type: dataObj.object ? dataObj.object.villagerType : null,
        offers: await Promise.all(offerKeys.map(async (offerKey) => {
            const offer = offers[offerKey];
            const matchingResultItemData = transformedArray.filter((item) => item.type === (offer.resultItem?.type || '').toLowerCase());
            const matchingItem1Data = offer.item1?.type ? transformedArray.filter((item) => item.type === offer.item1.type.toLowerCase()) : [];
            const matchingItem2Data = offer.item2?.type ? transformedArray.filter((item) => item.type === offer.item2.type.toLowerCase()) : [];

            return {
              id: offerKey,
              resultItem: {
                type: offer.resultItem.type.toLowerCase(),
                type_ru: matchingResultItemData[0].item_name_ru,
                amount: offer.resultItem.amount ? offer.resultItem.amount : 1,
                content: offer.resultItem.meta && offer.resultItem.meta.internal !== undefined ? await parseInternal(offer.resultItem.meta.internal) : [],
              },
              item1: offer.item1 ?
                {
                  type: offer.item1.type ? offer.item1.type.toLowerCase() : "",
                  type_ru: matchingItem1Data[0].item_name_ru,
                  amount: offer.item1.amount ? offer.item1.amount : 1,
                  content: offer.item1.meta && offer.item1.meta.internal !== undefined ? await parseInternal(offer.item1.meta.internal) : [],
                }
                :
                {},
              item2: offer.item2 ?
                {
                  type: offer.item2.type ? offer.item2.type.toLowerCase() : "",
                  type_ru: matchingItem2Data[0].item_name_ru,
                  amount: offer.item2.amount ? offer.item2.amount : 1,
                  content: offer.item2.meta && offer.item2.meta.internal !== undefined ? await parseInternal(offer.item2.meta.internal) : [],
                }
                :
                {}
            };
          })
        )
      };

      selectedData.push(selectedObj);
    }
  }

  return selectedData;
}


const selectedDataArray = selectData(parsedData);

(async () => {
  const outputData = `const shopData = ${JSON.stringify(await selectedDataArray)};`;
  fs.writeFileSync('shopOutput.js', outputData);
  console.log('Данные успешно записаны в файл shopOutput.js.');
})();