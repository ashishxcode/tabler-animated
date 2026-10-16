"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13h7.5"}],["path",{"d":"M9.424 7.268l4.999 -4.999"}],["path",{"d":"M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.25,11.13],"a":0.1}];

export const BrandLeetcodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandLeetcodeIcon.displayName = "BrandLeetcodeIcon";
