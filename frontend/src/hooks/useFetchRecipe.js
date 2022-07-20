import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../reducers/ui";
/*eslint-disable */
export const useFetchRecipe = ({ url }) => {
  const [data, setData] = useState(null)
  const token = useSelector((store) => store.user.token);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();







  useEffect(() => {
    const fetchData = async ({ options }) => {
      try {
        dispatch(ui.actions.setLoading(true));
        const response = await fetch(url, options);
        const json = await response.json();
        dispatch(ui.actions.setLoading(false));
        setData(json)
        
      } catch (error) {
        console.log("error", error);
        dispatch(ui.actions.setLoading(false));
        dispatch(ui.actions.setMessage(error.message));
      
      }
      
    };



    if (url.includes("newestRecipes")) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      };
      fetchData({ options });

     
     
    }



/* 


    if (url.includes("changeRecipe") && token) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: _id,
          title: title,
          description: description,
          ingredients: [
            {
              amount: amount,
              measure: measure,
              ingredient: ingredient
            }
          ],
          mainCategory: mainCategory,
          subCatergory: subCatergory,
          image: image
        })
      };
      fetchData({ options });
    }



    if (url.includes("createRecipe") && token) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description,
          ingredients: [
            {
              amount: amount,
              measure: measure,
              ingredient: ingredient
            }
          ],
          username: username,
          mainCategory: mainCategory,
          subCatergory: subCatergory
        })
      };
      fetchData({ options });
    } */


  
  }, [url, token, dispatch]);



    return {data};
 


  

};


