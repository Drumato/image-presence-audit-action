import { Resource } from "../../resource";
import { PodTemplate } from "../../core/v1/pod";

interface DaemonSet extends Resource {
  kind: 'DaemonSet';
  spec: DaemonSetSpec;
}

interface DaemonSetSpec {
  template: PodTemplate;
}
