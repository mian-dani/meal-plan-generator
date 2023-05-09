import "../Components/css/Fetch.css";
import { useState } from "react";
import axios from "axios";

const Fetch = () => {
  let result = "";
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  // const [food, setFood] = useState("");
  const [feetheight, setFeetheight] = useState("");
  const [inchheight, setInchheight] = useState("");
  const [calory, setCalory] = useState("");
  const [budget, setBudget] = useState("");
  const [res1, setRes1] = useState("");
  const [res2, setRes2] = useState("");
  const [res3, setRes3] = useState("");
 

  const fullfill = async () => {
    setRes1("Generating Response...");

    const options = {
      method: "POST",
      url: "https://bingchat-chatgpt-4-api.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "e6fef42151msh80b6ac75c2d2df5p1f318fjsn32ee858a6e55",
        "X-RapidAPI-Host": "bingchat-chatgpt-4-api.p.rapidapi.com",
      },
      data: {
        question: `Generate a full day diet plan with these given parameters.
                   "My age is ${age}.I am ${gender}.
                    My body WEIGHT is ${weight} KG. My height is ${feetheight} feet ${inchheight} inches.
                    My calories target is ${calory}. And my daily budget is ${budget} PKR"?.`,
        bing_u_cookie:
          "1drZOo053TgQ2uJV7GcZzEtKIGEf9ekjYRt0zwV1a8Euf6rNrBTPQYIayqEUwfKMZkYQcykpmcvcoCK5c7HHEzlz0mrRBeQ7GKWpvsQuwXbm4twahNnbTGEJTAC7YUQIkRiVbQymjsvonP2STjMH_05WnpCFn_eWAyf9VQWeePOJS",
      },
    };
    
    // `Suggest me a personalized meal and diet plan according to Day:1 Day:2 Day:3 routine for whole week routine each day.
    //               here are some parameters. "My name is ${name}. my age is ${age}. my gender is ${gender}.
    //                 my body WEIGHT is ${weight} KG. my food type is ${food}. my height is ${feetheight} feet ${inchheight} inches.
    //                 my calories target is ${calory}.and my daily budget is ${budget} PKR"?.`,
    try {
      const response = await axios.request(options);
      console.log(response.data);
      result= response.data;
      const ares = result.text_response;
      const indbreakfast= ares.indexOf("Breakfast");
      const indlunch= ares.indexOf("Lunch");
      const inddinner= ares.indexOf("Dinner");
      
      const str1= ares.substring(indbreakfast, indlunch);
      const str2 = ares.substring(indlunch, inddinner);
      const str3 = ares.substring(inddinner);

      const indend = str3.indexOf("Snack");
      const finalstr3= str3.substring(0, indend);

       setRes1(str1);
       setRes2(str2);
       setRes3(finalstr3);

    } catch (error) {
      // console.error(error);
      setRes1("Too many people using application. Server is busy. Try Again few seconds later");
      
    }
  };
  
  return (
    <>
      <section className="section">
        <div className="formdiv">
          <h3>Welcome to personalized AI Based Meal Planner.</h3>
          <form action="" className="form">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Dani..."
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              placeholder="21..."
              onChange={(e) => setAge(e.target.value)}
            />

            <label htmlFor="">Gender</label>
            <select
              name="gender"
              id=""
              
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male" selected>Gender</option>
              <option value="male" >Male</option>
              <option value="female">Fe-Male</option>
            </select>

            <label htmlFor="">Body Weight (Kg's)</label>
            <input
              type="number"
              name="weight"
              placeholder="65..."
              onChange={(e) => setWeight(e.target.value)}
            />

            {/* <label htmlFor="">Food Type</label>
            <select
              name="foodtype"
              id=""
              onChange={(e) => setFood(e.target.value)}
            >
              <option value=""></option>
              <option value="vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </select> */}

            <label htmlFor="">Height</label>
            <select
              name=""
              id=""
              
              onChange={(e) => setFeetheight(e.target.value)}
            >
              <option value="5" selected>In Feet</option>
              <option value="1">1-feet</option>
              <option value="2">2-feet</option>
              <option value="3">3-feet</option>
              <option value="4">4-feet</option>
              <option value="5">5-feet</option>
              <option value="6">6-feet</option>
              <option value="7">7-feet</option>
            </select>
            <select
              name=""
              id=""
              placeholder="(1 to 11)"
              onChange={(e) => setInchheight(e.target.value)}
            >
              <option value="7" selected>In Inches</option>
              <option value="1">1-inch</option>
              <option value="2">2-inch</option>
              <option value="3">3-inch</option>
              <option value="4">4-inch</option>
              <option value="5">5-inch</option>
              <option value="6">6-inch</option>
              <option value="7">7-inch</option>
              <option value="8">8-inch</option>
              <option value="9">9-inch</option>
              <option value="10">10-inch</option>
              <option value="11">11-inch</option>
            </select>

            <label htmlFor="">Calories</label>
            <input
              type="number"
              name="calory"
              placeholder="Best b/w: (1500-2500)"
              onChange={(e) => setCalory(e.target.value)}
            />

            <label htmlFor="">Daily Budget</label>
            <input
              type="number"
              placeholder="Best b/w: (1000-1500)"
              name="budget"
              onChange={(e) => setBudget(e.target.value)}
            />



            
          </form>
          <button className="btn" onClick={fullfill}>
              Generate
            </button>
        <div className="response">
          <h6>{res1}</h6>
          <h6>{res2}</h6>
          <h6>{res3}</h6>
          
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Fetch;
