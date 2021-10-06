

import React, {useState} from 'react'
import Select from "react-select";
import './ImpStyle1.css';

export default function Inp() {

  const data =
  {"Andaman and Nicobar Islands":["Port Blair*"],"Andhra Pradesh":["Adoni","Amalapuram","Anakapalle","Anantapur","Bapatla","Bheemunipatnam","Bhimavaram","Bobbili","Chilakaluripet","Chirala","Chittoor","Dharmavaram","Eluru","Gooty","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Jaggaiahpet","Jammalamadugu","Kadapa","Kadiri","Kakinada","Kandukur","Kavali","Kovvur","Kurnool","Macherla","Machilipatnam","Madanapalle","Mandapeta","Markapur","Nagari","Naidupet","Nandyal","Narasapuram","Narasaraopet","Narsipatnam","Nellore","Nidadavole","Nuzvid","Ongole","Palacole","Palasa Kasibugga","Parvathipuram","Pedana","Peddapuram","Pithapuram","Ponnur","Proddatur","Punganur","Puttur","Rajahmundry","Rajam","Rajampet","Ramachandrapuram","Rayachoti","Rayadurg","Renigunta","Repalle","Salur","Samalkot","Sattenapalle","Srikakulam","Srikalahasti","Srisailam Project (Right Flank Colony) Township","Sullurpeta","Tadepalligudem","Tadpatri","Tanuku","Tenali","Tirupati","Tiruvuru","Tuni","Uravakonda","Venkatagiri","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram","Yemmiganur","Yerraguntla"],"Arunachal Pradesh":["Naharlagun","Pasighat"],"Assam":["Barpeta","Bongaigaon City","Dhubri","Dibrugarh","Diphu","Goalpara","Guwahati","Jorhat","Karimganj","Lanka","Lumding","Mangaldoi","Mankachar","Margherita","Mariani","Marigaon","Nagaon","Nalbari","North Lakhimpur","Rangia","Sibsagar","Silapathar","Silchar","Tezpur","Tinsukia"],"Bihar":["Araria","Arrah","Arwal","Asarganj","Aurangabad","Bagaha","Barh","Begusarai","Bettiah","Bhabua","Bhagalpur","Buxar","Chhapra","Darbhanga","Dehri-on-Sone","Dumraon","Forbesganj","Gaya","Gopalganj","Hajipur","Jamalpur","Jamui","Jehanabad","Katihar","Kishanganj","Lakhisarai","Lalganj","Madhepura","Madhubani","Maharajganj","Mahnar Bazar","Makhdumpur","Maner","Manihari","Marhaura","Masaurhi","Mirganj","Mokameh","Motihari","Motipur","Munger","Murliganj","Muzaffarpur","Narkatiaganj","Naugachhia","Nawada","Nokha","Patna*","Piro","Purnia","Rafiganj","Rajgir","Ramnagar","Raxaul Bazar","Revelganj","Rosera","Saharsa","Samastipur","Sasaram","Sheikhpura","Sheohar","Sherghati","Silao","Sitamarhi","Siwan","Sonepur","Sugauli","Sultanganj","Supaul","Warisaliganj"],"Chandigarh":["Chandigarh*"],"Chhattisgarh":["Ambikapur","Bhatapara","Bhilai Nagar","Bilaspur","Chirmiri","Dalli-Rajhara","Dhamtari","Durg","Jagdalpur","Korba","Mahasamund","Manendragarh","Mungeli","Naila Janjgir","Raigarh","Raipur*","Rajnandgaon","Sakti","Tilda Newra"],"Dadra and Nagar Haveli":["Silvassa*"],"Delhi":["Delhi","New Delhi*"],"Goa":["Mapusa","Margao","Marmagao","Panaji*"],"Gujarat":["Adalaj","Ahmedabad","Amreli","Anand","Anjar","Ankleshwar","Bharuch","Bhavnagar","Bhuj","Chhapra","Deesa","Dhoraji","Godhra","Jamnagar","Kadi","Kapadvanj","Keshod","Khambhat","Lathi","Limbdi","Lunawada","Mahesana","Mahuva","Manavadar","Mandvi","Mangrol","Mansa","Mahemdabad","Modasa","Morvi","Nadiad","Navsari","Padra","Palanpur","Palitana","Pardi","Patan","Petlad","Porbandar","Radhanpur","Rajkot","Rajpipla","Rajula","Ranavav","Rapar","Salaya","Sanand","Savarkundla","Sidhpur","Sihor","Songadh","Surat","Talaja","Thangadh","Tharad","Umbergaon","Umreth","Una","Unjha","Upleta","Vadnagar","Vadodara","Valsad","Vapi","Vapi","Veraval","Vijapur","Viramgam","Visnagar","Vyara","Wadhwan","Wankaner"],"Haryana":["Bahadurgarh","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gohana","Gurgaon","Hansi","Hisar","Jind","Kaithal","Karnal","Ladwa","Mahendragarh","Mandi Dabwali","Narnaul","Narwana","Palwal","Panchkula","Panipat","Pehowa","Pinjore","Rania","Ratia","Rewari","Rohtak","Safidon","Samalkha","Sarsod","Shahbad","Sirsa","Sohna","Sonipat","Taraori","Thanesar","Tohana","Yamunanagar"],"Himachal Pradesh":["Mandi","Nahan","Palampur","Shimla*","Solan","Sundarnagar"],"Jammu and Kashmir":["Anantnag","Baramula","Jammu","Kathua","Punch","Rajauri","Sopore","Srinagar*","Udhampur"],"Jharkhand":["Adityapur","Bokaro Steel City","Chaibasa","Chatra","Chirkunda","Medininagar (Daltonganj)","Deoghar","Dhanbad","Dumka","Giridih","Gumia","Hazaribag","Jamshedpur","Jhumri Tilaiya","Lohardaga","Madhupur","Mihijam","Musabani","Pakaur","Patratu","Phusro","Ramgarh","Ranchi*","Sahibganj","Saunda","Simdega","Tenu dam-cum-Kathhara"],"Karnataka":["Adyar","Afzalpur","Arsikere","Athni","Bengaluru","Belagavi","Ballari","Chikkamagaluru","Davanagere","Gokak","Hubli-Dharwad","Karwar","Kolar","Lakshmeshwar","Lingsugur","Maddur","Madhugiri","Madikeri","Magadi","Mahalingapura","Malavalli","Malur","Mandya","Mangaluru","Manvi","Mudalagi","Mudabidri","Muddebihal","Mudhol","Mulbagal","Mundargi","Nanjangud","Nargund","Navalgund","Nelamangala","Pavagada","Piriyapatna","Puttur","Rabkavi Banhatti","Raayachuru","Ranebennuru","Ramanagaram","Ramdurg","Ranibennur","Robertson Pet","Ron","Sadalagi","Sagara","Sakaleshapura","Sindagi","Sanduru","Sankeshwara","Saundatti-Yellamma","Savanur","Sedam","Shahabad","Shahpur","Shiggaon","Shikaripur","Shivamogga","Surapura","Shrirangapattana","Sidlaghatta","Sindhagi","Sindhnur","Sira","Sirsi","Siruguppa","Srinivaspur","Tarikere","Tekkalakote","Terdal","Talikota","Tiptur","Tumkur","Udupi","Vijayapura","Wadi","Yadgir"],"Karnatka":["Mysore"],"Kerala":["Adoor","Alappuzha","Attingal","Chalakudy","Changanassery","Cherthala","Chittur-Thathamangalam","Guruvayoor","Kanhangad","Kannur","Kasaragod","Kayamkulam","Kochi","Kodungallur","Kollam","Kottayam","Kozhikode","Kunnamkulam","Malappuram","Mattannur","Mavelikkara","Mavoor","Muvattupuzha","Nedumangad","Neyyattinkara","Nilambur","Ottappalam","Palai","Palakkad","Panamattom","Panniyannur","Pappinisseri","Paravoor","Pathanamthitta","Peringathur","Perinthalmanna","Perumbavoor","Ponnani","Punalur","Puthuppally","Koyilandy","Shoranur","Taliparamba","Thiruvalla","Thiruvananthapuram","Thodupuzha","Thrissur","Tirur","Vaikom","Varkala","Vatakara"],"Madhya Pradesh":["Alirajpur","Ashok Nagar","Balaghat","Bhopal","Ganjbasoda","Gwalior","Indore","Itarsi","Jabalpur","Lahar","Maharajpur","Mahidpur","Maihar","Malaj Khand","Manasa","Manawar","Mandideep","Mandla","Mandsaur","Mauganj","Mhow Cantonment","Mhowgaon","Morena","Multai","Mundi","Murwara (Katni)","Nagda","Nainpur","Narsinghgarh","Narsinghgarh","Neemuch","Nepanagar","Niwari","Nowgong","Nowrozabad (Khodargama)","Pachore","Pali","Panagar","Pandhurna","Panna","Pasan","Pipariya","Pithampur","Porsa","Prithvipur","Raghogarh-Vijaypur","Rahatgarh","Raisen","Rajgarh","Ratlam","Rau","Rehli","Rewa","Sabalgarh","Sagar","Sanawad","Sarangpur","Sarni","Satna","Sausar","Sehore","Sendhwa","Seoni","Seoni-Malwa","Shahdol","Shajapur","Shamgarh","Sheopur","Shivpuri","Shujalpur","Sidhi","Sihora","Singrauli","Sironj","Sohagpur","Tarana","Tikamgarh","Ujjain","Umaria","Vidisha","Vijaypur","Wara Seoni"],"Maharashtra":["[[]]","Ahmednagar","Akola","Akot","Amalner","Ambejogai","Amravati","Anjangaon","Arvi","Aurangabad","Bhiwandi","Dhule","Kalyan-Dombivali","Ichalkaranji","Kalyan-Dombivali","Karjat","Latur","Loha","Lonar","Lonavla","Mahad","Malegaon","Malkapur","Mangalvedhe","Mangrulpir","Manjlegaon","Manmad","Manwath","Mehkar","Mhaswad","Mira-Bhayandar","Morshi","Mukhed","Mul","Greater Mumbai*","Murtijapur","Nagpur","Nanded-Waghala","Nandgaon","Nandura","Nandurbar","Narkhed","Nashik","Navi Mumbai","Nawapur","Nilanga","Osmanabad","Ozar","Pachora","Paithan","Palghar","Pandharkaoda","Pandharpur","Panvel","Parbhani","Parli","Partur","Pathardi","Pathri","Patur","Pauni","Pen","Phaltan","Pulgaon","Pune","Purna","Pusad","Rahuri","Rajura","Ramtek","Ratnagiri","Raver","Risod","Sailu","Sangamner","Sangli","Sangole","Sasvad","Satana","Satara","Savner","Sawantwadi","Shahade","Shegaon","Shendurjana","Shirdi","Shirpur-Warwade","Shirur","Shrigonda","Shrirampur","Sillod","Sinnar","Solapur","Soyagaon","Talegaon Dabhade","Talode","Tasgaon","Thane","Tirora","Tuljapur","Tumsar","Uchgaon","Udgir","Umarga","Umarkhed","Umred","Uran","Uran Islampur","Vadgaon Kasba","Vaijapur","Vasai-Virar","Vita","Wadgaon Road","Wai","Wani","Wardha","Warora","Warud","Washim","Yavatmal","Yawal","Yevla"],"Manipur":["Imphal*","Lilong","Mayang Imphal","Thoubal"],"Meghalaya":["Nongstoin","Shillong*","Tura"],"Mizoram":["Aizawl","Lunglei","Saiha"],"Nagaland":["Dimapur","Kohima*","Mokokchung","Tuensang","Wokha","Zunheboto"],"Odisha":["Balangir","Baleshwar Town","Barbil","Bargarh","Baripada Town","Bhadrak","Bhawanipatna","Bhubaneswar*","Brahmapur","Byasanagar","Cuttack","Dhenkanal","Jatani","Jharsuguda","Kendrapara","Kendujhar","Malkangiri","Nabarangapur","Paradip","Parlakhemundi","Pattamundai","Phulabani","Puri","Rairangpur","Rajagangapur","Raurkela","Rayagada","Sambalpur","Soro","Sunabeda","Sundargarh","Talcher","Tarbha","Titlagarh"],"Puducherry":["Karaikal","Mahe","Pondicherry*","Yanam"],"Punjab":["Amritsar","Barnala","Batala","Bathinda","Dhuri","Faridkot","Fazilka","Firozpur","Firozpur Cantt.","Gobindgarh","Gurdaspur","Hoshiarpur","Jagraon","Jalandhar Cantt.","Jalandhar","Kapurthala","Khanna","Kharar","Kot Kapura","Longowal","Ludhiana","Malerkotla","Malout","Mansa","Moga","Mohali","Morinda, India","Mukerian","Muktsar","Nabha","Nakodar","Nangal","Nawanshahr","Pathankot","Patiala","Pattran","Patti","Phagwara","Phillaur","Qadian","Raikot","Rajpura","Rampura Phul","Rupnagar","Samana","Sangrur","Sirhind Fatehgarh Sahib","Sujanpur","Sunam","Talwara","Tarn Taran","Urmar Tanda","Zira","Zirakpur"],"Rajasthan":["Ajmer","Alwar","Bikaner","Bharatpur","Bhilwara","Jaipur*","Jodhpur","Lachhmangarh","Ladnu","Lakheri","Lalsot","Losal","Makrana","Malpura","Mandalgarh","Mandawa","Mangrol","Merta City","Mount Abu","Nadbai","Nagar","Nagaur","Nasirabad","Nathdwara","Neem-Ka-Thana","Nimbahera","Nohar","Nokha","Pali","Phalodi","Phulera","Pilani","Pilibanga","Pindwara","Pipar City","Prantij","Pratapgarh","Raisinghnagar","Rajakhera","Rajaldesar","Rajgarh (Alwar)","Rajgarh (Churu)","Rajsamand","Ramganj Mandi","Ramngarh","Ratangarh","Rawatbhata","Rawatsar","Reengus","Sadri","Sadulshahar","Sadulpur","Sagwara","Sambhar","Sanchore","Sangaria","Sardarshahar","Sawai Madhopur","Shahpura","Shahpura","Sheoganj","Sikar","Sirohi","Sojat","Sri Madhopur","Sujangarh","Sumerpur","Suratgarh","Taranagar","Todabhim","Todaraisingh","Tonk","Udaipur","Udaipurwati","Vijainagar, Ajmer"],"Tamil Nadu":["Arakkonam","Aruppukkottai","Chennai*","Coimbatore","Erode","Gobichettipalayam","Kancheepuram","Karur","Lalgudi","Madurai","Manachanallur","Nagapattinam","Nagercoil","Namagiripettai","Namakkal","Nandivaram-Guduvancheri","Nanjikottai","Natham","Nellikuppam","Neyveli (TS)","O' Valley","Oddanchatram","P.N.Patti","Pacode","Padmanabhapuram","Palani","Palladam","Pallapatti","Pallikonda","Panagudi","Panruti","Paramakudi","Parangipettai","Pattukkottai","Perambalur","Peravurani","Periyakulam","Periyasemur","Pernampattu","Pollachi","Polur","Ponneri","Pudukkottai","Pudupattinam","Puliyankudi","Punjaipugalur","Ranipet","Rajapalayam","Ramanathapuram","Rameshwaram","Rasipuram","Salem","Sankarankoil","Sankari","Sathyamangalam","Sattur","Shenkottai","Sholavandan","Sholingur","Sirkali","Sivaganga","Sivagiri","Sivakasi","Srivilliputhur","Surandai","Suriyampalayam","Tenkasi","Thammampatti","Thanjavur","Tharamangalam","Tharangambadi","Theni Allinagaram","Thirumangalam","Thirupuvanam","Thiruthuraipoondi","Thiruvallur","Thiruvarur","Thuraiyur","Tindivanam","Tiruchendur","Tiruchengode","Tiruchirappalli","Tirukalukundram","Tirukkoyilur","Tirunelveli","Tirupathur","Tirupathur","Tiruppur","Tiruttani","Tiruvannamalai","Tiruvethipuram","Tittakudi","Udhagamandalam","Udumalaipettai","Unnamalaikadai","Usilampatti","Uthamapalayam","Uthiramerur","Vadakkuvalliyur","Vadalur","Vadipatti","Valparai","Vandavasi","Vaniyambadi","Vedaranyam","Vellakoil","Vellore","Vikramasingapuram","Viluppuram","Virudhachalam","Virudhunagar","Viswanatham"],"Telangana":["Adilabad","Bellampalle","Bhadrachalam","Bhainsa","Bhongir","Bodhan","Farooqnagar","Gadwal","Hyderabad*","Jagtial","Jangaon","Kagaznagar","Kamareddy","Karimnagar","Khammam","Koratla","Kothagudem","Kyathampalle","Mahbubnagar","Mancherial","Mandamarri","Manuguru","Medak","Miryalaguda","Nagarkurnool","Narayanpet","Nirmal","Nizamabad","Palwancha","Ramagundam","Sadasivpet","Sangareddy","Siddipet","Sircilla","Suryapet","Tandur","Vikarabad","Wanaparthy","Warangal","Yellandu"],"Tripura":["Agartala*","Belonia","Dharmanagar","Kailasahar","Khowai","Pratapgarh","Udaipur"],"Uttar Pradesh":["Achhnera","Agra","Aligarh","Allahabad","Amroha","Azamgarh","Bahraich","Chandausi","Etawah","Firozabad","Fatehpur Sikri","Hapur","Hardoi *","Jhansi","Kalpi","Kanpur","Khair","Laharpur","Lakhimpur","Lal Gopalganj Nindaura","Lalitpur","Lalganj","Lar","Loni","Lucknow*","Mathura","Meerut","Modinagar","Moradabad","Nagina","Najibabad","Nakur","Nanpara","Naraura","Naugawan Sadat","Nautanwa","Nawabganj","Nehtaur","Niwai","Noida","Noorpur","Obra","Orai","Padrauna","Palia Kalan","Parasi","Phulpur","Pihani","Pilibhit","Pilkhuwa","Powayan","Pukhrayan","Puranpur","Purquazi","Purwa","Rae Bareli","Rampur","Rampur Maniharan","Rampur Maniharan","Rasra","Rath","Renukoot","Reoti","Robertsganj","Rudauli","Rudrapur","Sadabad","Safipur","Saharanpur","Sahaspur","Sahaswan","Sahawar","Sahjanwa","Saidpur","Sambhal","Samdhan","Samthar","Sandi","Sandila","Sardhana","Seohara","Shahabad, Hardoi","Shahabad, Rampur","Shahganj","Shahjahanpur","Shamli","Shamsabad, Agra","Shamsabad, Farrukhabad","Sherkot","Shikarpur, Bulandshahr","Shikohabad","Shishgarh","Siana","Sikanderpur","Sikandra Rao","Sikandrabad","Sirsaganj","Sirsi","Sitapur","Soron","Suar","Sultanpur","Sumerpur","Tanda","Thakurdwara","Thana Bhawan","Tilhar","Tirwaganj","Tulsipur","Tundla","Ujhani","Unnao","Utraula","Varanasi","Vrindavan","Warhapur","Zaidpur","Zamania"],"Uttarakhand":["Bageshwar","Dehradun","Haldwani-cum-Kathgodam","Hardwar","Kashipur","Manglaur","Mussoorie","Nagla","Nainital","Pauri","Pithoragarh","Ramnagar","Rishikesh","Roorkee","Rudrapur","Sitarganj","Srinagar","Tehri"],"West Bengal":["Adra","Alipurduar","Arambagh","Asansol","Baharampur","Balurghat","Bankura","Darjiling","English Bazar","Gangarampur","Habra","Hugli-Chinsurah","Jalpaiguri","Jhargram","Kalimpong","Kharagpur","Kolkata","Mainaguri","Malda","Mathabhanga","Medinipur","Memari","Monoharpur","Murshidabad","Nabadwip","Naihati","Panchla","Pandua","Paschim Punropara","Purulia","Raghunathpur","Raghunathganj","Raiganj","Rampurhat","Ranaghat","Sainthia","Santipur","Siliguri","Sonamukhi","Srirampore","Suri","Taki","Tamluk","Tarakeswar"]}


    const options= [
        {
            value :"Andaman and Nicobar Islands",
            label :"Andaman and Nicobar Islands"
        },
        {
            value :"Andhra Pradesh",
            label :"Andhra Pradesh"
        },
        {
            value :"Arunachal Pradesh",
            label :"Arunachal Pradesh"
        },
        
        {
            value :"Assam",
            label :"Assam"
        },
        {
            value :"Bihar",
            label :"Bihar"
        },
        {
            value :"Chandigarh",
            label :"Chandigarh"
        },
        {
            value :"Chhattisgarh",
            label :"Chhattisgarh"
        },
        {
            value :"Dadra and Nagar Haveli",
            label :"Dadra and Nagar Haveli"
        },
        {
            value :"Daman and Diu",
            label :"Daman and Diu"
        },
        {
            value :"Delhi",
            label :"Delhi"
        },
        {
            value :"Goa",
            label :"Goa"
        },
        {
            value:"Gujarat",
            label :"Gujarat"
        },
        {
            value :"Haryana",
            label :"Haryana"
        },
        {
            value :"Himachal Pradesh",
            label :"Himachal Pradesh"
        },
        {
            value:"Jammu and Kashmir",
            label :"Jammu and Kashmir"
        },
        {
            value :"Jharkhand",
            label :"Jharkhand"
        },
        {
            value :"Karnataka",
            label :"Karnataka"
        },
        {
            value :"Kerala",
            label :"Kerala"
        },
        {
            value :"Ladakh",
            label :"Ladakh"
        },
        {
            value :"Lakshadweep",
            label :"Lakshadweep"
        },
        {
            value :"Madhya Pradesh",
            label :"Madhya Pradesh"
        },
        {
            value :"Maharashtra",
            label :"Maharashtra"
        },
        {
            value :"Manipur",
            label :"Manipur"
        },
        {
            value :"Meghalaya",
            label :"Meghalaya"
        },
        {
            value:"Mizoram",
            label :"Mizoram"
        },
        {
            value :"Nagaland",
            label :"Nagaland"
        },
        {
            value :"Odisha",
            label :"Odisha"
        },
        {
            value :"Puducherry",
            label :"Puducherry"
        },
        {
            value :"Punjab",
            label :"Punjab"
        },
        {
            value :"Rajasthan",
            label :"Rajasthan"
        },
        {
            label :"Sikkim",
            value :"Sikkim"
        },
        {
            value :"Tamil Nadu",
            label :"Tamil Nadu"
        },
        {
            value :"Telangana",
            label :"Telangana"
        },
        {
            value :"Tripura",
            label :"Tripura"
        },
        {
            value :"Uttar Pradesh",
            label :"Uttar Pradesh"
        },
        {
            value :"Uttarakhand",
            label :"Uttarakhand"
        },
        {
            value:"West Bengal",
            label:"West Bengal"
        }
    ]


    const [order, setorder] = useState(
        {
            Name: "",
            Contact: "" ,
            State: "" ,
            City: "",
            Line1: "" ,
            Line2 : "" ,
            Landmark : "" ,
            Pincode : ""


        }
    );

    const handleInput= (e)=>{
        const name = e.target.name;
        const value= e.target.value;
        console.log(name,value)

        setorder({...order,[name]:value})

    }

    const [records, setRecords] = useState([])


    const handleSubmit= (e) => {
        e.preventDefault();
         console.log(order.Name)
        
        if(order.Name && order.Contact && order.State && order.City && order.Line1 && order.Line2 && order.Landmark && order.Pincode)

   {
        const newRecord = {...order , id: new Date().getTime().toString() }
        console.log(records);
        setRecords([ newRecord]);
        console.log(records);

     console.log(st)
     console.log(City)
        setorder({
            Name:"" ,
         Contact: "" ,
        State: "" ,
        City: "",
        Line1: "" ,
        Line2 : "" ,
        Landmark : "" ,
        Pincode : ""
    })

    setSt(null)
    setCity(null);
    setCityList([]);


}
else{
    alert("fill all the value")
}

    }

    const handleReset= (e) => {
        e.preventDefault();

        setSt(null)
        setCity(null);
        setCityList([]);
        Array.from(document.querySelectorAll("Select")).forEach(
            Select => (Select.value = "")
          );
        setorder({
            Name:"" ,
         Contact: "" ,
        State: "" ,
        City: "",
        Line1: "" ,
        Line2 : "" ,
        Landmark : "" ,
        Pincode : ""
})

    }


    const [st, setSt] = useState("");
    const [City, setCity] = useState("");
    const [CityList, setCityList] = useState([])

    const handleStateChange = (obj) => {
        setCity(null);
        setCityList([]);

        const countrySel = obj.value;
        console.log(countrySel)
        const citiesSel = data[countrySel] ;

        setSt(countrySel);
        console.log(citiesSel)
        
        setCity("");
         let i=0;
         for (;citiesSel[i];) {
           
            console.log(i);
            let temp= {value:citiesSel[i] , label: citiesSel[i]};
            console.log(temp);
           
            setCityList(CityList =>[...CityList,temp]);
            console.log(CityList)
            i++;
          }
          
          setorder({...order, State:obj.value})

          console.log(CityList);
       
      };

      const handleCityChange = (obj) => {
        setCity(obj.value);
        setorder({...order,City:obj.value})
      };
     

    return (
        <>
         
        <div className= "center" id= 'center' >

         <h1>Enter Your Details</h1>

        <form id= "myForm" action="" onReset={handleReset}  onSubmit={handleSubmit}>

            <div className="txt_field">
               
                <input type="text" autoComplete="off" required
                value= {order.Name}
                onChange= {handleInput}
                name="Name" id="Name"/>
                 
            </div>
            <label htmlFor="Name">Name</label>

            <div className="txt_field">
    
                <input  type="tel"   pattern="[0-9]{10}"  maxLength="10" autoComplete="off" required
                placeholder="Enter your 10 digit number"
                 value=  {order.Contact}
                onChange= {handleInput}
                 name="Contact" id="Contact number"/>
                
            </div>
            <label htmlFor="Contact number">Contact number</label>
             
            <div className="txt_field">
            <Select className="selState" 
          placeholder="Select State" required
          name= "StateInput"
          defaultValue={'no data'}
          options={options}
          onChange={e=> handleStateChange(e)}
        />
           
         </div>
         <label htmlFor="State"> <div className="show"> {st} </div>  State </label>
     
         <div className="txt_field">
        <Select required
          placeholder="Select City"
          name= "CitiesInput"
        options={CityList}
          onChange={handleCityChange}
        />
         
           </div>
           <label  htmlFor="City">    <div className="show"> {City} </div> City   </label>
    
           <div className="txt_field">
              
                <input type="text" autoComplete="off" required
                 value=  {order.Line1}
                 onChange= {handleInput}
                  name="Line1" id="Line 1 Address"/>
                 
            </div>
            <label htmlFor="    Line 1 Address">Line 1 Address</label>

            <div className="txt_field">
              
                <input type="text" autoComplete="off" required
                 value=  {order.Line2}
                 onChange= {handleInput}
                  name="Line2" id="Line 2 Address"/>
                   
            </div>
            <label htmlFor="Line 2 Address">Line 2 Address</label>
            
            <div className="txt_field">
             
                <input type="text" autoComplete="off" required
                 value=  {order.Landmark}
                 onChange= {handleInput}
                  name="Landmark" id="Landmark"/>
                   
            </div>
            <label htmlFor="Landmark">Landmark</label>

            <div className="txt_field">
             
                <input type="tel"   pattern="[0-9]{6}"  maxLength="6" autoComplete="off" required
                 value=  {order.Pincode}
                 onChange= {handleInput}
                  name="Pincode" id="Pincode"/>
                   
            </div>
              <label htmlFor="Pincode">Pincode</label>
            
            <div className="choose">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            </div>
        
        </form>

        </div>
       
       

        <div className="showData">
      
            {     
                records.map((curElem) =>{
                  
                    const {id,Name, Contact,State, City, Line1, Line2,Landmark, Pincode}= curElem
                    return(
                        <>
                        <h3>"Your Order has been SuccessFully Placed"</h3>

                        <div className= "showDataStyle" key= {id}>
                      <span> {Name} </span>   <span> {Contact} </span>       <span> {State} </span>   <span>{City} </span>  <span> {Line1} </span>   <span> {Line2}</span>  <span> {Landmark} </span>     <span>{Pincode} </span>  

                        </div>
                        </>
                    )
                })
            }
        </div>


        </>
    )
}
