"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 6h11"}],["path",{"d":"M12 12h8"}],["path",{"d":"M15 18h5"}],["path",{"d":"M5 6v.01"}],["path",{"d":"M8 12v.01"}],["path",{"d":"M11 18v.01"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3,4,5],"o":[12.5,18.01],"a":5}];

export const ListTreeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListTreeIcon.displayName = "ListTreeIcon";
