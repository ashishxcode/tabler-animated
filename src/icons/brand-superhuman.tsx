"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 12l4 3l-8 7l-8 -7l4 -3"}],["path",{"d":"M12 3l-8 6l8 6l8 -6l-8 -6"}],["path",{"d":"M12 15h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12.5],"a":0.1}];

export const BrandSuperhumanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandSuperhumanIcon.displayName = "BrandSuperhumanIcon";
