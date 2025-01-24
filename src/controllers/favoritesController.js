const axios = require('axios');
let favorites = [];

const getCharacters = async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener personajes' });
  }
};

const addFavorite = (req, res) => {
  const character = req.body;

  if (!character || !character.id) {
    return res.status(400).json({ message: 'Personaje inválido' });
  }

  favorites.push(character);
  res.status(201).json({ message: 'Personaje agregado a favoritos', favorites });
};

const getFavorites = (req, res) => {
  res.status(200).json(favorites);
};

module.exports = {
  getCharacters,
  addFavorite,
  getFavorites,
};

const deleteFavorite = (req, res) => {
  const { id } = req.params;
  const favoriteIndex = favorites.findIndex(fav => fav.id === parseInt(id));

  if (favoriteIndex === -1) {
    return res.status(404).json({ message: 'Favorito no encontrado' });
  }

  // Eliminar favorito
  favorites.splice(favoriteIndex, 1);
  return res.status(200).json({ message: 'Favorito eliminado exitosamente' });
};


module.exports = { getCharacters, addFavorite, getFavorites, deleteFavorite };

