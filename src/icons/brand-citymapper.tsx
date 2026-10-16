"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013"}],["path",{"d":"M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013"}],["path",{"d":"M8 12h8"}],["path",{"d":"M13 9l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandCitymapperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCitymapperIcon.displayName = "BrandCitymapperIcon";
