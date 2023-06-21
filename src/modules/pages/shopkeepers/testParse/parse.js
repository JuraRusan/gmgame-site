const fs = require('fs');
const yaml = require('js-yaml');
const nbt = require('nbt');
const {Buffer} = require('buffer');
const {transformedArray} = require("./item_name_data");
const {enchantArray} = require("./enchantmentsArray");

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
              const potion = item.tag === undefined ? "" : item.tag.value.Potion?.value.split(':')[1]
              let matchingData = [];
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === id.toLowerCase());
              if (id.toLowerCase() === "tipped_arrow" || id.toLowerCase() === "splash_potion" || id.toLowerCase() === "potion" || id.toLowerCase() === "lingering_potion") {
                matchingData = transformedArrayFiltered.filter((item) => item.potion === potion.toLowerCase());
              } else {
                matchingData = transformedArrayFiltered;
              }
              const id_ru = matchingData.length === 0 ? "{NO translation}" : matchingData[0].item_name_ru;
              const count = item.Count.value;
              const enchant = item.tag === undefined
                ?
                []
                :
                item.tag.value?.Enchantments?.value?.value.map((el) => {
                  const enchant_id = el.id.value.split(':')[1];
                  const matchingEnchantData = enchant_id ? enchantArray.filter((item) => item.enchant_id.map(id => id.toLowerCase()).includes(enchant_id.toLowerCase())) : [];
                  const enchant_id_ru = matchingEnchantData.length === 0 ? "{NO translation}" : matchingEnchantData[0].enchant_id_ru;
                  const lvl = el.lvl.value;

                  return {enchant_id, enchant_id_ru, lvl}
                })

              return {slot, id, id_ru, count, potion, enchant};
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


            let matchingResultItemData = [];
            if (offer.resultItem?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.resultItem.type.toLowerCase());
              if (offer.resultItem.type.toLowerCase() === "tipped_arrow" || offer.resultItem.type.toLowerCase() === "splash_potion" || offer.resultItem.type.toLowerCase() === "potion" || offer.resultItem.type.toLowerCase() === "lingering_potion") {
                matchingResultItemData = transformedArrayFiltered.filter((item) => item.potion === offer.resultItem.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingResultItemData = transformedArrayFiltered;
              }
            }

            let matchingItem1Data = [];
            if (offer.item1?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.item1.type.toLowerCase());
              if (offer.item1.type.toLowerCase() === "tipped_arrow" || offer.item1.type.toLowerCase() === "splash_potion" || offer.item1.type.toLowerCase() === "potion" || offer.item1.type.toLowerCase() === "lingering_potion") {
                matchingItem1Data = transformedArrayFiltered.filter((item) => item.potion === offer.item1.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingItem1Data = transformedArrayFiltered;
              }
            }

            let matchingItem2Data = [];
            if (offer.item2?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.item2.type.toLowerCase());
              if (offer.item2.type.toLowerCase() === "tipped_arrow" || offer.item2.type.toLowerCase() === "splash_potion" || offer.item2.type.toLowerCase() === "potion" || offer.item2.type.toLowerCase() === "lingering_potion") {
                matchingItem2Data = transformedArrayFiltered.filter((item) => item.potion === offer.item2.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingItem2Data = transformedArrayFiltered;
              }
            }

            const transformEnchant = (enchant) =>
              Object.keys(enchant).map((key) => {
                const enchantId = key.toLowerCase();
                const matchingItem = enchantArray.find((item) =>
                  item.enchant_id.some((id) => id.toLowerCase() === enchantId)
                );
                const enchantIdRu = matchingItem?.enchant_id_ru || "{NO translation}";

                return {
                  enchant_id: enchantId,
                  enchant_id_ru: enchantIdRu,
                  lvl: enchant[key],
                };
              });

            return {
              id: offerKey,
              resultItem: {
                type: offer.resultItem.type ? offer.resultItem.type.toLowerCase() : "",
                type_ru: matchingResultItemData.length === 0 ? "{NO translation}" : matchingResultItemData[0].item_name_ru,
                amount: offer.resultItem.amount ? offer.resultItem.amount : 1,
                potion: offer.resultItem.meta && offer.resultItem.meta?.["meta-type"] === "POTION" ? offer.resultItem.meta?.["potion-type"].split(':')[1] : "",
                enchant: offer.resultItem.meta && offer.resultItem.meta?.enchants ? transformEnchant(offer.resultItem.meta.enchants) : [],
                content: offer.resultItem.meta && offer.resultItem.meta.internal !== undefined ? await parseInternal(offer.resultItem.meta.internal) : [],
              },
              item1: offer.item1 ?
                {
                  type: offer.item1.type ? offer.item1.type.toLowerCase() : "",
                  type_ru: matchingItem1Data.length === 0 ? "{NO translation}" : matchingItem1Data[0].item_name_ru,
                  amount: offer.item1.amount ? offer.item1.amount : 1,
                  potion: offer.item1.meta && offer.item1.meta?.["meta-type"] === "POTION" ? offer.item1.meta?.["potion-type"].split(':')[1] : "",
                  enchant: offer.item1.meta && offer.item1.meta?.enchants ? transformEnchant(offer.item1.meta.enchants) : [],
                  content: offer.item1.meta && offer.item1.meta.internal !== undefined ? await parseInternal(offer.item1.meta.internal) : [],
                }
                :
                {},
              item2: offer.item2 ?
                {
                  type: offer.item2.type ? offer.item2.type.toLowerCase() : "",
                  type_ru: matchingItem2Data.length === 0 ? "{NO translation}" : matchingItem2Data[0].item_name_ru,
                  amount: offer.item2.amount ? offer.item2.amount : 1,
                  potion: offer.item2.meta && offer.item2.meta?.["meta-type"] === "POTION" ? offer.item2.meta?.["potion-type"].split(':')[1] : "",
                  enchant: offer.item2.meta && offer.item2.meta?.enchants ? transformEnchant(offer.item2.meta.enchants) : [],
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
  const outputData = `const shopData = ${JSON.stringify(await selectedDataArray, null, 2)};`;
  fs.writeFileSync('shopOutput.js', outputData);
  console.log('Данные успешно записаны в файл shopOutput.js.');
})();

