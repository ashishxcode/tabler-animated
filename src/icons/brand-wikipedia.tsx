"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4.984h2"}],["path",{"d":"M8 4.984h2.5"}],["path",{"d":"M14.5 4.984h2.5"}],["path",{"d":"M22 4.984h-2"}],["path",{"d":"M4 4.984l5.455 14.516l6.545 -14.516"}],["path",{"d":"M9 4.984l6 14.516l6 -14.516"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12.5,12.24],"a":0.1}];

export const BrandWikipediaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandWikipediaIcon.displayName = "BrandWikipediaIcon";
