import prisma from "../database/client.js";

const controller = {} // Objeto vazio

controller.create = async function (req, res) {
  try {
    // Conecta-se ao BD e envia uma instrução de criação de um novo documento, com os dados que estão dentro do req.body
    await prisma.professor.create({ data: req.body })

    // Envia uma resposta de sucesso ao front-end
    // HTTP 201: Created
    res.status(201).end()
  } catch (error) {
    // Deu errado: exibe o erro no console do back-end
    console.error(error)

    // Envia o erro ao front-end, com status 500
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveAll = async function(req, res) {
  try {
    
    const result = await prisma.professor.findMany({
      orderBy: [
        {nome: 'asc'},    // Ordem crescente
      ]
    })
      res.send(result)

  } catch (error) {

    console.error(error)
      res.status(500).send(error)

  }
}

controller.retrieveOne = async function(req, res) {
  try {

    const result = await prisma.professor.findUnique({
      where: { id: req.params.id }
    })

    if(result) {
      res.send(result)
    } else {
      res.status(404).end()
    }
    
  } catch (error) {

    console.error(error)
      res.status(500).send(error)

  }
}

controller.update = async function(req, res) {
  try {

    const result = await prisma.professor.update({
      where: { id: req.params.id },
      data: req.body
    })

    console.log(result);

    if(result) {
      res.status(204).end()
    } else {
      res.status(404).end()
    }
    
  } catch (error) {
    
    console.error(error)
      res.status(500).send(error)

  }
}

controller.delete = async function(req, res) {
  try {

    const result = await prisma.professor.delete({
      where: { id: req.params.id }
    })

    if(result) res.status(204).end()
    else res.status(404).end()

  } catch (error) {
    console.error(error)
      res.status(500).send(error)
  }
}

export default controller