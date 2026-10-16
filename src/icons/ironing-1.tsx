"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8"}],["path",{"d":"M12 15h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.91,12],"a":0.08},{"fx":"pop","n":[1],"o":[12.01,15],"a":0.22,"dl":0.1}];

export const Ironing1Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ironing1Icon.displayName = "Ironing1Icon";
