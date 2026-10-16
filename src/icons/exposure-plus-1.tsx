"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h6"}],["path",{"d":"M6 9v6"}],["path",{"d":"M18 19v-14l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[16,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[6,12]]}];

export const ExposurePlus1Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExposurePlus1Icon.displayName = "ExposurePlus1Icon";
