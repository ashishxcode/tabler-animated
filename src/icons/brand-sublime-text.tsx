"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8l-14 4.5v-5.5l14 -4.5l0 5.5"}],["path",{"d":"M19 17l-14 4.5v-5.5l14 -4.5l0 5.5"}],["path",{"d":"M19 11.5l-14 -4.5"}],["path",{"d":"M5 12.5l14 4.5"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const BrandSublimeTextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandSublimeTextIcon.displayName = "BrandSublimeTextIcon";
