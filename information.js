// let get_users;
// let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,m1,m2,m3;
// let keys_1 = ["username","password","email","mobile_phone_number","company_title","company_type","registered_trademark",
// "company_register_number","trade_registration_number","kep_address",
// "tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no",
// "company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email","membership_type"];
// let arr_update = [];
// let id_user =parseInt(localStorage.getItem('id'));


// (async function loadData() {
//     let url = 'http://51.68.195.202:3000/users';
//     let response = await fetch(url);
//     let commits = await response.json(); // читаем ответ в формате JSON
//     get_users = commits;
//     console.log(get_users);
// }());

// function update(){
//     let findObj = {};
//     l1 = document.getElementById('Username').value;
//     l2 = document.getElementById('Password').value;
//     l3 = document.getElementById('Email').value;
//     l4 = document.getElementById('Phone_number').value; //
//     l5 = document.getElementById('Company_title').value;
//     l6 = document.getElementById('Company_type').value; //

//     l7 = document.getElementById('Company_register_number').value;

//     l8 = document.getElementById('Kep_address').value;
//     l9 = document.getElementById('Tax_office_city').value;
//     l10 = document.getElementById('Tax_office').value;
//     l11 = document.getElementById('Tax_number').value;
//     l12 = document.getElementById('Title_of_person').value;
//     l13 = document.getElementById('Name_surname').value;
//     l14 = document.getElementById('Local_no').value;
//     l15 = document.getElementById('Mobile_no').value; //
//     l16 = document.getElementById('Fax').value;
//     l17 = document.getElementById('Address1').value;

//     l18 = document.getElementById('Email1').value;
//     l19 = document.getElementById('Membership_type').value;

//     arr_update.push(l1,l2,l3,l4,l5,l6,m1,l7,m2,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,m3,l18,l19);

//     for(let i = 0;i<arr_update.length;i++){
//         if(arr_update[i] == undefined){
//             continue;
//         }else
//             findObj[keys_1[i]] = arr_update[i];
//     }

//     console.log(findObj);

//     for(let i =0;i<get_users.length;i++){
//         let findId;
//         for (let value of Object.values(get_users[i])) {
//             findId = value;
//             console.log(findId);
//             if(findId = id_user){
//                 var myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");

//                 var raw = JSON.stringify([findObj]);

//                 var requestOptions = {
//                   method: 'PATCH',
//                   headers: myHeaders,
//                   body: raw,
//                   redirect: 'follow'
//                 };

//                 fetch(`http://51.68.195.202:3000/users?id=eq.${id_user}`, requestOptions)
//                   .then(response => response.text())
//                   .then(result => console.log(result))
//                   .catch(error => console.log('error', error));

//             }
//             break;
//         }
//     }
// }



var company_informations = new Vue ({
    el: '#company_informations',
    data: {
      username: '',
      password: '',
      email: '',
      phone_number: '',
      membership_type: '',
      company_title: '',
      company_type: '',
      company_register_number: '',
      kep_address: '',
      tax_office_city: '',
        tax_office: '',
        tax_number: '',
        name_surname: '',
        title_of_person: '',
        local_no: '',
        mobile_no: '',
        fax: '',
        address1: '',
        gsm: '',
        email1: '',
        get_users: '',
        m1: '',
        m2: '',
        m3: '',
        keys_1: ["username","password","email","phone_number","membership_type","company_title","company_type","company_register_number","kep_address",
"tax_office_city","tax_office","tax_number","name_surname","title_of_person","company_local_no",
"mobile_no","fax","company_address","gsm","contact_person_email"],
        arr_update = [],
        id_user =parseInt(localStorage.getItem('id')),
        loading: false,
        users: [],
    },

    methods: {
        chekUsers(){

            this.loading = true;
            this.users = [];

            axios.get('http://51.68.195.202:3000/users_api')
            .then((response) => {
                const data = response.data;
                this.users = data;
                this.loading = false;
                this.update();
            });
        },

        update(){
            let findObj = {};
            username = this.username;
            password = this.password;
            email = this.email;
            phone_number = this.phone_number;
            company_title = this.company_title;
            company_type = this.company_type;
            company_register_number = this.company_register_number;
            kep_address = this.kep_address;
            tax_office_city = this.tax_office_city;
            tax_office = this.tax_office;
            tax_number = this.tax_number;
            title_of_person = this.title_of_person;
            name_surname = this.name_surname;
            local_no = this.local_no;
            fax = this.fax;
            address1 = this.address1;
            email1 = this.email1;
            membership_type = this.membership_type;

            this.arr_update.push(username,password,email,phone_number,company_title,company_type,m1,company_register_number,m2,kep_address,tax_office_city,tax_office,tax_number,title_of_person,name_surname,local_no,fax,address1,email1,m3,membership_type,l19);

            for(let i = 0;i<this.arr_update.length;i++){
                if(this.arr_update[i] == undefined){
                    continue;
                }else
                    findObj[this.keys_1[i]] = this.arr_update[i];
            }

            console.log(findObj);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify([findObj]);

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

            fetch(`http://51.68.195.202:3000/users?id=eq.${id_user}`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
                    },
                }
            })




