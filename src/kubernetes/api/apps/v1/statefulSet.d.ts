import { Resource } from "../../resource";
import { PodTemplate } from "../../core/v1/pod";

interface StatefulSet extends Resource {
  kind: 'StatefulSet';
  spec: StatefulSetSpec;
}

interface StatefulSetSpec {
  template: PodTemplate;
}
