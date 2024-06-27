interface Resource {
  apiVersion: string;
  kind: string;
  metadata: ObjectMeta;
};

interface ObjectMeta {
  name: string;
  namespace?: string;
  labels?: { [key: string]: string };
  annotations?: { [key: string]: string };
};

export { Resource, ObjectMeta };
