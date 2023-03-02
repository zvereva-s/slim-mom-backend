# slim-mom-backend

► Back for Slim Mom web app

_What you can do:_

- authorization
- social networks authorization
- add, remove products, get full list of products of user

- count daily rate
- count sum of calories, fat, protein, carbohydrates for the day
- get nor recommended products

_Used in work:_

- Node.js
- Mongo db
- Joi validation
- Google OAuth

_Running locally:_

        $npm i
        $npm run start:dev

### Getting Started:

####BASE_URL :

        https://slim-mom-backend.onrender.com

####Authentication

**SIGN UP**

        POST - "/api/auth/signup"

        *send*          {
                        "name": "derry derry",
                        "email":"dderry@mail.com",
                        "password": "password"
                        }
        *respond*  {
                        "user": {
                                "name": "derry derry",
                                "email": "dderry@mail.com"
                        },
                        "healthyData": {
                                "notAllowedProducts": {
                                "ru": [
                                        "Разнообразные сладости (карамель, мармелад)",
                                        "Жевательная резинка",
                                        "Мясные полуфабрикаты (фарш, мясные замороженные полуфабрикаты)"...
                                ],
                                "ua": [
                                        "Різноманітні солодощі (карамель, мармелад)",
                                        "Жувальна гумка",
                                        "М'ясні напівфабрикати (фарш, м'ясні заморожені напівфабрикати)"...
                                ],
                                "en": [
                                        "Various sweets (caramel, marmalade)",
                                        "Chewing gum",
                                        "Meat semi-finished products (minced meat, frozen meat semi-finished products)"...
                                ]
                                },
                                "bodyCalculating": {
                                "age": 0,
                                "gender": "",
                                "height": 0,
                                "physicalActivity": 0,
                                "weight": 0,
                                "bloodType": 0,
                                "desiredWeight": 0
                                },
                                "dailyRate": "0"
                                }
                        }

**SIGN IN**

        POST - "/api/auth/signin"

        *send*          {
                        "email":"dderry@mail.com",
                        "password": "password"
                        }
        *respond*       {
                                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZiYjc0ZDc2MTlmMTk2NTE0Y2IxZiIsImlhdCI6MTY3Nzc0MzcwMiwiZXhwIjoxNjc3NzY1MzAyfQ.6krUPYF_SK3QHUdBnz4Xa5f57oT8NPlR5K7oM-_rCeU",
                                "user": {
                                        "id": "63ffbb74d7619f196514cb1f",
                                        "name": "derry derry",
                                        "email": "dderry@mail.com"
                                },
                                "healthyData": {
                                        "owner": "63ffbb74d7619f196514cb1f",
                                        "notAllowedProducts": {
                                        "ru": [
                                                "Разнообразные сладости (карамель, мармелад)",
                                                "Жевательная резинка",
                                                "Мясные полуфабрикаты (фарш, мясные замороженные полуфабрикаты)"...
                                        ],
                                        "ua": [
                                                "Різноманітні солодощі (карамель, мармелад)",
                                                "Жувальна гумка",
                                                "М'ясні напівфабрикати (фарш, м'ясні заморожені напівфабрикати)"...
                                        ],
                                        "en": [
                                                "Various sweets (caramel, marmalade)",
                                                "Chewing gum",
                                                "Meat semi-finished products (minced meat, frozen meat semi-finished products)"...
                                        ]
                                        },
                                        "bodyCalculating": {
                                        "age": 0,
                                        "gender": "",
                                        "height": 0,
                                        "physicalActivity": 0,
                                        "weight": 0,
                                        "bloodType": 0,
                                        "desiredWeight": 0
                                        },
                                        "dailyRate": "0"
                                }
                        }

**CURRENT**

       GET - "/api/auth/current"

       *respond*        {
                                "token": "",
                                "user": {
                                        "id": "63ffbb74d7619f196514cb1f",
                                        "name": "derry derry",
                                        "email": "dderry@mail.com"
                                },
                                "healthyData": {
                                        "owner": "63ffbb74d7619f196514cb1f",
                                        "notAllowedProducts": {
                                        "ru": [
                                                "Разнообразные сладости (карамель, мармелад)",
                                                "Жевательная резинка",
                                                "Мясные полуфабрикаты (фарш, мясные замороженные полуфабрикаты)"...
                                        ],
                                        "ua": [
                                                "Різноманітні солодощі (карамель, мармелад)",
                                                "Жувальна гумка",
                                                "М'ясні напівфабрикати (фарш, м'ясні заморожені напівфабрикати)"...
                                        ],
                                        "en": [
                                                "Various sweets (caramel, marmalade)",
                                                "Chewing gum",
                                                "Meat semi-finished products (minced meat, frozen meat semi-finished products)"...
                                        ]
                                        },
                                        "bodyCalculating": {
                                        "age": 0,
                                        "gender": "",
                                        "height": 0,
                                        "physicalActivity": 0,
                                        "weight": 0,
                                        "bloodType": 0,
                                        "desiredWeight": 0
                                        }
                                }
                        }

**LOG OUT**

        POST -  "/api/auth/logout"

       *respond*        {"message": "Done✅"}

**GOOGLE AUTHENTICATION**

_APP_URL - link to your server link_

        ${APP_URL} + ${GOOGLE_CALLBACK}

        example: https://localhost:3003/api/auth/google
        example: https://localhost:3003/api/auth/google/callback

_WEB_URL - link to web application_

        example: https://locahost:3000/

_GOOGLE CLOUD CONSOLE_
        
***1. Create new project*** <br>
<img src="https://user-images.githubusercontent.com/96833638/222378253-14f2ac18-abc4-4d48-bbeb-ad618b224528.png" width="500" />
        
***2. Create credentials*** <br>
<img src="https://joxi.ru/EA455lPt09lRPr.jpg" width="500" />
        
***3. Add settings*** <br>
<img src="http://joxi.ru/gmvGGx4u0zjg62" width="500" />
        
        

