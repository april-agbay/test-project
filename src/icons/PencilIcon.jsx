import Pencil from '../assets/pencil.svg';

export default function PencilIcon(props){
    const { size = 20 } = props;

    return <img src={Pencil} width={size} />

}