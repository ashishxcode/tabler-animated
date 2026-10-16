"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4h-9v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-9"}],["path",{"d":"M15 8h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1"}],["path",{"d":"M11 12h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.5,12.5],"a":0.1}];

export const BrandJiraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandJiraIcon.displayName = "BrandJiraIcon";
