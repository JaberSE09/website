import client from "../../../connection/Square";
import JSONBig from "json-bigint"

const handler = async (req,res) =>{

    const { id } = req.query

    try {
        const response = await client.catalogApi.retrieveCatalogObject(id,
        true);
      
        return res.status(200).json(JSONBig.parse(JSONBig.stringify(response.result.object)));    
      } catch(error) {
        console.log(error);
      }

}

export default handler