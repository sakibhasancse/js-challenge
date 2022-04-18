const foodItems = [{ type: ['50Tk', '60TK'], food: { name: 'orange' } }, { type: ['30Tk', '60TK'], food: { name: 'mango' } }, { type: ['90Tk', '50TK'], food: { name: 'food' } }]

/** Output
 * @param foodItems
 * @returns {*[{ type: '50Tk', foods: [ [Object] ] },
 { type: '60TK', foods: [ [Object], [Object] ] },
 { type: '30Tk', foods: [ [Object] ] },
 { type: '90Tk', foods: [ [Object] ] },
 { type: '50TK', foods: [ [Object] ] }]}
 */

/** Bad way*/
// const getItemByCategory = (data) => {
//   let categories = []
//
//   data.map((item) => categories.push(...item.type))
//
//   const allTypes = categories.filter((item, index) => categories.indexOf(item) === index)
//
//   categories = allTypes.reduce(function (s, a) {
//     s.push({ type: a })
//     return s
//   }, [])
//
//   data.map((item) => {
//     item.type.map(i => {
//       const s = categories.find(it => it.type === i)
//       s.users = item
//       return i
//     })
//     return item
//   })
//   return categories
// }
//
// console.log(getItemByCategory(foodItems))
//

/** Good Way*/

const getItemByCategory = (data) => {
    const categories = []

    data.map((item) => item?.type?.map((type) => {
            if (!categories.length) categories.push({ type: type, foods: [item] })
            else {
                const oldCategory = categories.find(oldItem => oldItem.type === type)
                if (oldCategory) {
                    oldCategory.foods = [...oldCategory.foods, item]
                } else {
                    categories.push({ type: type, foods: [item] })
                }
            }
            return type
        })
    )
    return categories
}

console.log(getItemByCategory(foodItems))
