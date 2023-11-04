const createMaterial = (name, unit, costPerUnit) => {
  const Material = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit,
  }
  return Material
}

const calculateMaterialCost = (material, units) => {
  return `${units} ${material.unit}s of ${material.name} costs $${material.costPerUnit * units}.`
}

const createSupplyCloset = (supplies=[]) => {
  const SupplyCloset = {
    supplies: supplies.map((supply) => supply.name)
  }
  return SupplyCloset
}

const addSupply = (closet, item) => {
  if (closet.supplies.includes(item.name)) {
    return `You already have ${item.name} in your closet!`
  }
  closet.supplies.push(item.name)
  return closet.supplies
}

const createNewProject = (materials, status="not started") => {
  const Project = {
    materialsNeeded: materials,
    status: status,
  }
  return Project
}

const compareMaterials = (project, currentSupplies) => {
  materialsOnHand = {}
  var message = "Yay! You can start this project!"
  currentSupplies.supplies.forEach((item) => materialsOnHand[item] = true)
  project.materialsNeeded.forEach((item) => {
    if (materialsOnHand[item.name] !== true) {
      message = "Oh no! You need to go shopping before you can start this project!"
    }
  })
  return message
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
};