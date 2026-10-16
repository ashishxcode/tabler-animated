"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18l0 -3"}],["path",{"d":"M10 18l0 -6"}],["path",{"d":"M14 18l0 -9"}],["path",{"d":"M18 18l0 -12"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2],"st":0.13,"os":[[6,16.5],[10,15],[14,13.5]]}];

export const AntennaBars5Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaBars5Icon.displayName = "AntennaBars5Icon";
