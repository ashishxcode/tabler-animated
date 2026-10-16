"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M3 13h4"}],["path",{"d":"M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"}],["path",{"d":"M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[18.87,13.5],"st":0.07},{"fx":"pop","n":[0,2],"o":[8.5,12],"a":0.04}];

export const AbcIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AbcIcon.displayName = "AbcIcon";
