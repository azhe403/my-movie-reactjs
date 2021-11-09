import React, {ComponentType, FunctionComponent} from "react";

export interface PageRoutes {
    path: string;
    component: React.LazyExoticComponent<ComponentType<FunctionComponent<Record<string, unknown>>>>
}
