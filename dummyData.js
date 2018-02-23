var Chocolate = require('./server/model/chocolate');

module.exports = function () {
    //if there exists models in the database
    Chocolate.count().exec((err, count) => {
        console.log("COUNT", count)
        if (count > 0) {
            return;
        } else {
            var choc1 = {
                company: "Dandelion Chocolate",
                name: "Amabnja, Madagascar",
                beanOrigin: "Madagascar",
                ingredients: "cocoa beans, sugar",
                percentage: 70,
                variety: "dark",
                rating: 5,
                notes: "strawberries, raspberry, citrus",
                img: "dandelion_madagascar.jpg"
            }

            Chocolate.create([choc1], (error) => {
                if (!error) {
                    console.log('dummy database ready to go!');
                }
            });

            Chocolate.find(function (err, chocolates) {
              if (err) {
                return console.error(err);
              } else {
                console.log(chocolates);
              }     
            })
        }
    });
}

 // {
 //            company: "Dandelion Chocolate",
 //            name: "Amabnja, Madagascar",
 //            beanOrigin: "Madagascar",
 //            ingredients: "cocoa beans, sugar",
 //            percentage: 70,
 //            variety: "dark",
 //            rating: 5,
 //            notes: "strawberries, raspberry, citrus",
 //            img: "dandelion_madagascar.jpg"
 //        },
 //        {
 //            company: "Marou Chocolate",
 //            name: "Dong Nai",
 //            beanOrigin: "Vietnam",
 //            ingredients: "cocoa beans, sugar",
 //            percentage: 72,
 //            variety: "dark",
 //            rating: 4,
 //            notes: "mild, spice",
 //            img: "marou_dong_nai.jpg"
 //        },
 //        {
 //            company: "Mast Brothers",
 //            name: "smoke chocolate",
 //            beanOrigin: "Papa New Guinea",
 //            ingredients: "cocoa beans, sugar",
 //            percentage: 70,
 //            variety: "dark",
 //            rating: 5,
 //            notes: "smoke",
 //            img: "mast_smoke.jpg"
 //        },
 //        {
 //            company: "Mast Brothers",
 //            name: "olive oil chocolate",
 //            beanOrigin: "Madagascar",
 //            ingredients: "cocoa, sugar, cocoa butter, olive oil",
 //            percentage: 70,
 //            variety: "dark",
 //            rating: 5,
 //            notes: "smoke",
 //            img: "mast_olive_oil.jpg"
 //        },
 //        {
 //            company: "TCHO",
 //            name: "Milk Chocolate (Cacao)",
 //            beanOrigin: "blend",
 //            ingredients: "sugar, cacao beans, whole milk powder, cocoa butter, non-fat milk powder, soy lecithin, vanilla beans",
 //            percentage: 53,
 //            variety: "milk chocolate",
 //            rating: 5,
 //            notes: "fudgy",
 //            img: "tcho_cacao.jpg"
 //        },
 //        {
 //            company: "TCHO",
 //            name: "'Mokaccino' Milk Chocolate + Blue Bottle Coffee Bar",
 //            beanOrigin: "blend",
 //            ingredients: "sugar, cacao beans, whole milk powder, cocoa butter, non-fat milk powder, coffee beans, soy lecithin, vanilla beans",
 //            percentage: "N/A",
 //            variety: "milk chocolate",
 //            rating: 5,
 //            notes: "warm, nutty, dried fruit, caramel",
 //            img: "tcho_mokaccino.jpg"
 //        },
 //        {
 //            company: "Chuao Chocolatier",
 //            name: "firecracker bar",
 //            beanOrigin: "blend",
 //            ingredients: "dark chocolate, popping candy, chile, sea salt",
 //            percentage: "N/A",
 //            variety: "dark chocolate",
 //            rating: 4,
 //            notes: "sea salt, chipotle",
 //            img: "chuao_firecracker.jpg"
 //        }