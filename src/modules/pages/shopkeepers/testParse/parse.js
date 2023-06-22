const fs = require('fs');
const yaml = require('js-yaml');
const nbt = require('nbt');
const {Buffer} = require('buffer');

const {transformedArray} = require("./item_name_data");
const {enchantArray} = require("./enchantmentsArray");
const {goat_horn_array} = require("./goat_horn");
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
              const count = item.Count.value;
              const potion = item.tag === undefined ? "" : item.tag.value.Potion?.value.split(':')[1]

              // -------------------- id_ru
              let matchingData = [];
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === id.toLowerCase());
              if (id.toLowerCase() === "tipped_arrow" || id.toLowerCase() === "splash_potion" || id.toLowerCase() === "potion" || id.toLowerCase() === "lingering_potion") {
                matchingData = transformedArrayFiltered.filter((item) => item.potion === potion.toLowerCase());
              } else {
                matchingData = transformedArrayFiltered;
              }
              const id_ru = matchingData.length === 0 ? "{NO translation}" : matchingData[0].item_name_ru;

              // -------------------- enchant
              const enchant = item.tag === undefined ? [] :
                item.tag.value?.Enchantments?.value?.value.map((el) => {
                  const enchant_id = el.id.value.split(':')[1];
                  const matchingEnchantData = enchant_id ? enchantArray.filter((item) => item.enchant_id.map(id => id.toLowerCase()).includes(enchant_id.toLowerCase())) : [];
                  const enchant_id_ru = matchingEnchantData.length === 0 ? "{NO translation}" : matchingEnchantData[0].enchant_id_ru;
                  const lvl = el.lvl.value;

                  return {enchant_id, enchant_id_ru, lvl}
                });

              // -------------------- stored_enchant
              const stored_enchant = item.tag === undefined ? [] :
                item.tag.value?.StoredEnchantments?.value.value.map((el) => {
                  const enchant_id = el.id.value.split(':')[1];
                  const matchingEnchantData = enchant_id ? enchantArray.filter((item) => item.enchant_id.map(id => id.toLowerCase()).includes(enchant_id.toLowerCase())) : [];
                  const enchant_id_ru = matchingEnchantData.length === 0 ? "{NO translation}" : matchingEnchantData[0].enchant_id_ru;
                  const lvl = el.lvl.value;

                  return {enchant_id, enchant_id_ru, lvl}
                })

              // -------------------- instrument
              let instrumentDataRu = [];
              if (id.toLowerCase() === "goat_horn") {
                instrumentTypeTime = item.tag.value?.instrument?.value.split(':')[1].toLowerCase();
                instrumentDataRu = goat_horn_array.filter((item) => item.instrument === instrumentTypeTime);
              } else {
                instrumentDataRu = []
              }
              const instrument = item.tag === undefined ? {} : {
                instrument_type: item.tag.value?.instrument?.value.split(':')[1].toLowerCase(),

                instrument_type_ru: instrumentDataRu.length === 0 ? undefined : instrumentDataRu[0].instrument_ru
              }

              return {slot, id, id_ru, count, potion, instrument, enchant, stored_enchant};
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

            //---- ру название для resultItem
            let matchingResultItemData = [];
            if (offer.resultItem?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.resultItem.type.toLowerCase());
              if (offer.resultItem.type.toLowerCase() === "tipped_arrow" || offer.resultItem.type.toLowerCase() === "splash_potion" || offer.resultItem.type.toLowerCase() === "potion" || offer.resultItem.type.toLowerCase() === "lingering_potion") {
                matchingResultItemData = transformedArrayFiltered.filter((item) => item.potion === offer.resultItem.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingResultItemData = transformedArrayFiltered;
              }
            }
            //---- ру название для item1
            let matchingItem1Data = [];
            if (offer.item1?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.item1.type.toLowerCase());
              if (offer.item1.type.toLowerCase() === "tipped_arrow" || offer.item1.type.toLowerCase() === "splash_potion" || offer.item1.type.toLowerCase() === "potion" || offer.item1.type.toLowerCase() === "lingering_potion") {
                matchingItem1Data = transformedArrayFiltered.filter((item) => item.potion === offer.item1.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingItem1Data = transformedArrayFiltered;
              }
            }

            //---- ру название для item2
            let matchingItem2Data = [];
            if (offer.item2?.type) {
              const transformedArrayFiltered = transformedArray.filter((item) => item.type === offer.item2.type.toLowerCase());
              if (offer.item2.type.toLowerCase() === "tipped_arrow" || offer.item2.type.toLowerCase() === "splash_potion" || offer.item2.type.toLowerCase() === "potion" || offer.item2.type.toLowerCase() === "lingering_potion") {
                matchingItem2Data = transformedArrayFiltered.filter((item) => item.potion === offer.item2.meta?.["potion-type"].split(':')[1]);
              } else {
                matchingItem2Data = transformedArrayFiltered;
              }
            }

            //---- ру название для зачарований
            const transformEnchant = (enchant) =>
              Object.keys(enchant).map((key) => {
                const enchantId = key.toLowerCase();
                const matchingItem = enchantArray.find((item) => item.enchant_id.some((id) => id.toLowerCase() === enchantId));
                const enchantIdRu = matchingItem?.enchant_id_ru || "{NO translation}";
                return {
                  enchant_id: enchantId,
                  enchant_id_ru: enchantIdRu,
                  lvl: enchant[key],
                };
              });

            const instrumentDataResultItem = offer.resultItem?.meta?.instrument ? goat_horn_array.filter((item) => item.instrument === offer.resultItem?.meta?.instrument.split(':')[1].toLowerCase()) : [];
            const instrumentDataItem1 = offer.item1?.meta?.instrument ? goat_horn_array.filter((item) => item.instrument === offer.item1?.meta?.instrument.split(':')[1].toLowerCase()) : [];
            const instrumentDataItem2 = offer.item2?.meta?.instrument ? goat_horn_array.filter((item) => item.instrument === offer.item2?.meta?.instrument.split(':')[1].toLowerCase()) : [];

            return {
              id: offerKey,
              resultItem: offer.resultItem ?
                {
                  type: offer.resultItem.type ? offer.resultItem.type.toLowerCase() : "",
                  type_ru: matchingResultItemData.length === 0 ? "{NO translation}" : matchingResultItemData[0].item_name_ru,
                  amount: offer.resultItem.amount ? offer.resultItem.amount : 1,
                  potion: offer.resultItem.meta && offer.resultItem.meta?.["meta-type"] === "POTION" ? offer.resultItem.meta?.["potion-type"].split(':')[1] : "",
                  instrument: offer.resultItem.meta && offer.resultItem.meta?.["meta-type"] === "MUSIC_INSTRUMENT" ? {
                    instrument_type: offer.resultItem?.meta?.instrument.split(':')[1].toLowerCase(),
                    instrument_type_ru: instrumentDataResultItem[0].instrument_ru
                  } : {},
                  enchant: offer.resultItem.meta && offer.resultItem.meta?.enchants ? transformEnchant(offer.resultItem.meta.enchants) : [],
                  stored_enchant: offer.resultItem.meta && offer.resultItem.meta?.["stored-enchants"] ? transformEnchant(offer.resultItem.meta?.["stored-enchants"]) : [],
                  content: offer.resultItem.meta && offer.resultItem.meta.internal !== undefined ? await parseInternal(offer.resultItem.meta.internal) : [],
                }
                :
                {},
              item1: offer.item1 ?
                {
                  type: offer.item1.type ? offer.item1.type.toLowerCase() : "",
                  type_ru: matchingItem1Data.length === 0 ? "{NO translation}" : matchingItem1Data[0].item_name_ru,
                  amount: offer.item1.amount ? offer.item1.amount : 1,
                  potion: offer.item1.meta && offer.item1.meta?.["meta-type"] === "POTION" ? offer.item1.meta?.["potion-type"].split(':')[1] : "",
                  instrument: offer.item1.meta && offer.item1.meta?.["meta-type"] === "MUSIC_INSTRUMENT" ? {
                    instrument_type: offer.item1?.meta?.instrument.split(':')[1].toLowerCase(),
                    instrument_type_ru: instrumentDataItem1[0].instrument_ru
                  } : {},
                  enchant: offer.item1.meta && offer.item1.meta?.enchants ? transformEnchant(offer.item1.meta.enchants) : [],
                  stored_enchant: offer.item1.meta && offer.item1.meta?.["stored-enchants"] ? transformEnchant(offer.item1.meta?.["stored-enchants"]) : [],
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
                  instrument: offer.item2.meta && offer.item2.meta?.["meta-type"] === "MUSIC_INSTRUMENT" ? {
                    instrument_type: offer.item2?.meta?.instrument.split(':')[1].toLowerCase(),
                    instrument_type_ru: instrumentDataItem2[0].instrument_ru
                  } : {},
                  enchant: offer.item2.meta && offer.item2.meta?.enchants ? transformEnchant(offer.item2.meta.enchants) : [],
                  stored_enchant: offer.item2.meta && offer.item2.meta?.["stored-enchants"] ? transformEnchant(offer.item2.meta?.["stored-enchants"]) : [],
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