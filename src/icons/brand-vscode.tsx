"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 3v18l4 -2.5v-13l-4 -2.5"}],["path",{"d":"M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141"}],["path",{"d":"M16 16.5l-11 -10l-2 1l13 13.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.5,12],"a":0.1}];

export const BrandVscodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandVscodeIcon.displayName = "BrandVscodeIcon";
