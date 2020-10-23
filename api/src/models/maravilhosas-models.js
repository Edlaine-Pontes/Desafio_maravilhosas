const data = require('../data/data.json')

// selectAllData
const selectAllData = () => {
    return data
}

//selectDataById
// const selectDataById = (id) => {
//     const found = data.find(element => element.id == id)
//     return found
// }

const selectDataByKey = (key, value) => {
    const found = data.find(element => element[key] == value)
    return found
}

//insertData
const insertData = (novaMaravilhosa) => { 
    data.push(novaMaravilhosa)
    return data
}

//updateData
const updateData = (id, maravilhosaAtualizada) => { 
    const maravilhosaId = data.map(maravilhosa => maravilhosa.id)
    console.log(maravilhosaId)

    const atualizaId = maravilhosaId.indexOf(id)
    if (atualizaId < 0) {
        return "ID não encontrado!"
    }
    const maravilhosaAtualizadacomId = {id, ...maravilhosaAtualizada}
    console.log('maravilhosa atualizado com Id', maravilhosaAtualizadacomId)
    data.splice(atualizaId, 1, maravilhosaAtualizadacomId)
    const found = data.find(maravilhosa => maravilhosa.id === id)
    return found
}

//deleteData
const deleteData = (itemLista) => {
    const index = data.indexOf(itemLista)
    data.splice(index, 1)
    return data
}

module.exports = {
    selectAllData,
    selectDataByKey,
    insertData, 
    updateData, 
    deleteData
}