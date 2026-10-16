"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 21l0 .01"}],["path",{"d":"M3 9l0 .01"}],["path",{"d":"M21 9l0 .01"}],["path",{"d":"M8 20.1a9 9 0 0 1 -5 -7.1"}],["path",{"d":"M16 20.1a9 9 0 0 0 5 -7.1"}],["path",{"d":"M6.2 5a9 9 0 0 1 11.4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[11.9,3.98],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[12,21.01],[3,9],[21,9],[5.5,16.55],[18.5,16.55]]}];

export const Atom2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Atom2Icon.displayName = "Atom2Icon";
