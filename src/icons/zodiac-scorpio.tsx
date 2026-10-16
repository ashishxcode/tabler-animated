"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a2 2 0 0 1 2 2v9"}],["path",{"d":"M5 6a2 2 0 0 1 4 0v9"}],["path",{"d":"M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[15,13],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,9.5],[7,9.5]]}];

export const ZodiacScorpioIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacScorpioIcon.displayName = "ZodiacScorpioIcon";
