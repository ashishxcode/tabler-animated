"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15h.01"}],["path",{"d":"M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8"}],["path",{"d":"M9 15h.01"}],["path",{"d":"M15 15h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.91,12],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.01,15],[9,15],[15.01,15]]}];

export const Ironing3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ironing3Icon.displayName = "Ironing3Icon";
