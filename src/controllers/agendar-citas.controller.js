import supabase from "../database.js";

const addCitas = {}

addCitas.getClinicas = async (req, res) => {
    try {

        const { data, error } = await supabase.
            from('clinica')
            .select('*');

        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Error al obtener el usuario' });
        }

        if (!data) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

    } catch (error) {
        console.log(error)
    }

}

export default addCitas