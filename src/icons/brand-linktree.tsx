"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10h16"}],["path",{"d":"M6.5 4.5l11 11"}],["path",{"d":"M6.5 15.5l11 -11"}],["path",{"d":"M12 10v-8"}],["path",{"d":"M12 15v7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandLinktreeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandLinktreeIcon.displayName = "BrandLinktreeIcon";
