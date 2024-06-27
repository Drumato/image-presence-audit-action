import { Resource } from "../../resource";
import { PodTemplate } from "../../core/v1/pod";

interface Deployment extends KubernetesResource {
  kind: 'Deployment';
  spec: DeploymentSpec;
  // ... Deployment特有のフィールド ...
}

interface DeploymentSpec {
  template: PodTemplate;
  // ...
}

