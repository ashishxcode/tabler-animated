"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5"}],["path",{"d":"M3 9l3 6l3 -6"}],["path",{"d":"M9 20l6 -16"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"st":0.07},{"fx":"pop","n":[2],"o":[12,12],"a":0.04}];

export const KerningIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KerningIcon.displayName = "KerningIcon";
