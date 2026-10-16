"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171"}],["path",{"d":"M12 7v5"}],["path",{"d":"M10 9h4"}],["path",{"d":"M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9.5],[12,9]]}];

export const Grave2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Grave2Icon.displayName = "Grave2Icon";
