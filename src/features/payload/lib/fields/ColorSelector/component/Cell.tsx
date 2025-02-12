import { TextFieldServerComponent } from "payload";
import { PostTag } from "@/components/ui/PostTag";

const Cell: TextFieldServerComponent = ({ rowData: { tag, color } }) => {
  return <PostTag tag={tag} hexColor={color} />;
};

export default Cell;
