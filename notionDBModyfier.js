import { Client } from "@notionhq/client"


const notion = new Client({ auth: process.env.NOTION_INTEGRATION_KEY })

const databaseId = process.env.NOTION_TRANSLATIONS_DB_ID

var wordTranslations = {
  Swedish: "Swedish",
  French: "French",
  Esperanto: "Esperanto",
  Portuguese: "Portuguese",
  Polish: "Polish",
  Danish: "Danish",
  Chinese: "Chinese",
  Dutch: "Dutch",
  Hindi: "Hindi",
  Turkish: "Turkish",
  Indonesian: "Indonesian",
  Spanish: "Spanish",
  Icelandic: "Icelandic",
  Greek: "Greek",
  Latin: "Latin",
  Korean: "Korean",
  Russian: "Russian",
  Ukrainian: "Ukrainian",
  Italian: "Italian",
  German: "German",
  Swahili: "Swahili",
  Vietnamese: "Vietnamese",
  Norwegian: "Norwegian",
  WordInEnglish: "WordInEnglish"
}

// const databaseId = process.env.NOTION_DATABASE_ID


async function getAddedWordRowId(wordToTranslate) {
  // const databaseId = databaseId;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      "or": [{
        "property": "WordInEnglish",
        "rich_text": {
          "contains": wordToTranslate
        }
      }]
    }
  });
  console.log(response.results[0].id)
  return response.results[0].id;
};


async function updateTranslatedWordRowWithTranslations(addedWordRowId, wordTranslations) {
  console.log(33333333333)
  try {
    console.log(444444)
    const response = await notion.pages.update({
      page_id: addedWordRowId,
      properties: {
        Swedish: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Swedish } }]
        },
        French: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.French || "translation missing" } }]
        },
        Esperanto: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Esperanto || "translation missing" } }]
        },
        Portuguese: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Portuguese || "translation missing" } }]
        },
        Polish: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Polish || "translation missing" } }]
        },
        Danish: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Danish || "translation missing" } }]
        },
        Chinese: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Chinese || "translation missing" } }]
        },
        Dutch: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Dutch || "translation missing" } }]
        },
        Hindi: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Hindi || "translation missing" } }]
        },
        Turkish: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Turkish || "translation missing" } }]
        },
        Indonesian: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Indonesian || "translation missing" } }]
        },
        Spanish: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Spanish || "translation missing" } }]
        },
        Icelandic: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Icelandic || "translation missing" } }]
        },
        Greek: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Greek || "translation missing" } }]
        },
        Latin: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Latin || "translation missing" } }]
        },
        Korean: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Korean || "translation missing" } }]
        },
        Russian: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Russian || "translation missing" } }]
        },
        Ukrainian: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Ukrainian || "translation missing" } }]
        },
        Italian: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Italian || "translation missing" } }]
        },
        German: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.German || "translation missing" } }]
        },
        Swahili: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Swahili || "translation missing" } }]
        },
        Vietnamese: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Vietnamese || "translation missing" } }]
        },
        Norwegian: {
          type: 'rich_text',
          rich_text: [{ "type": "text", "text": { "content": wordTranslations.Norwegian || "translation missing" } }]
        },
        WordInEnglish: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: wordTranslations.WordInEnglish
              },
            },
          ],
        }
      }
    })
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

async function addTranslationsToNotionDB(word, wordTranslations) {

  try {
    const addedWordRowId = await getAddedWordRowId(word)
    console.log(22222222, addedWordRowId)
    updateTranslatedWordRowWithTranslations(addedWordRowId, wordTranslations)
  } catch (error) {
    console.error(error.body)
  }
}

export {addTranslationsToNotionDB}

// addTranslationsToNotionDB("lullaby")


