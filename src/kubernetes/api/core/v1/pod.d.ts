import { ObjectMeta } from "../../resource";
interface PodTemplate {
  metadata: ObjectMeta;
  spec: PodSpec;
};

interface PodSpec {
  containers: Container[];
};

interface Container {
  image: string;
};

export { PodTemplate };
