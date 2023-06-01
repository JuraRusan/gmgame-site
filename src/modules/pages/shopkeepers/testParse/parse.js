const fs = require('fs');
const yaml = require('js-yaml');
const {transformedArray} = require("./item_name_data");

const saveData = fs.readFileSync('save.yml', 'utf8');
const cleanedData = saveData.replace(/^\s*data-version:.*(\r?\n)/, '');
const parsedData = yaml.load(cleanedData);

function selectData(data) {
  const selectedData = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const dataObj = data[key];
      const offers = dataObj.offers || {}; // Добавлено значение по умолчанию, если offers отсутствует
      const offerKeys = Object.keys(offers);

      const selectedObj = {
        shop_id: key,
        x: dataObj.x,
        y: dataObj.y,
        z: dataObj.z,
        name: dataObj.name,
        owner: dataObj.owner,
        object_profession: dataObj.object ? dataObj.object.profession : null,
        object_villager_type: dataObj.object ? dataObj.object.villagerType : null,
        offers: offerKeys.map((offerKey) => {
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
              // content: offer.resultItem.meta ? offer.resultItem.meta.internal : [],
              content: [],
            },
            item1: offer.item1 ?
              {
                type: offer.item1.type ? offer.item1.type.toLowerCase() : "",
                type_ru: matchingItem1Data[0].item_name_ru,
                amount: offer.item1.amount ? offer.item1.amount : 1,
                // content: offer.item1.meta ? offer.item1.meta.internal : [],
                content: [],
              }
              :
              {},
            item2: offer.item2 ?
              {
                type: offer.item2.type ? offer.item2.type.toLowerCase() : "",
                type_ru: matchingItem2Data[0].item_name_ru,
                amount: offer.item2.amount ? offer.item2.amount : 1,
                // content: offer.item2.meta ? offer.item2.meta.internal : [],
                content: [],
              }
              :
              {}
          };
        })
      };

      selectedData.push(selectedObj);
    }
  }

  return selectedData;
}


const selectedDataArray = selectData(parsedData);

const outputData = `const shopData = ${JSON.stringify(selectedDataArray)};`;
fs.writeFileSync('shopOutput.js', outputData);

console.log('Данные успешно записаны в файл shopOutput.js.');