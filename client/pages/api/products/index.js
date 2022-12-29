import client from "../../../connection/Square"
import JSONBig from "json-bigint"
const handler = async (req, res) => {
    try {
        const response = await client.catalogApi.listCatalog(undefined,
        'ITEM');
      
        return res.status(200).json(JSONBig.parse(JSONBig.stringify(response.result.objects)));    
      } catch(error) {
        console.log(error);
      }
  }
  
  export default handler