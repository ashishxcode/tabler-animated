"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"}],["path",{"d":"M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"}],["path",{"d":"M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"}],["path",{"d":"M11 6l0 .01"}],["path",{"d":"M13 18l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandPythonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandPythonIcon.displayName = "BrandPythonIcon";
