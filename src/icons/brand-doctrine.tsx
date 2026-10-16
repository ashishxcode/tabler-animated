"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 14h6"}],["path",{"d":"M12 11l3 3l-3 3"}],["path",{"d":"M10 3l6.9 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandDoctrineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandDoctrineIcon.displayName = "BrandDoctrineIcon";
