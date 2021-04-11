import { persons } from '../../data.json';

export default ({ query: { id } }, res) => {
  const filterElemet = persons.filter((elements) => elements.id === id);
  !filterElemet.length
    ? res.status(404).json({ msg: `This person with id: ${id} dont no exist` })
    : res.status(200).json(filterElemet);
};
