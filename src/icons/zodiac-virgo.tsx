"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a2 2 0 0 1 2 2v9"}],["path",{"d":"M5 6a2 2 0 0 1 4 0v9"}],["path",{"d":"M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5"}],["path",{"d":"M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[14.5,12.5],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,9.5],[7,9.5],[15.5,16]]}];

export const ZodiacVirgoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacVirgoIcon.displayName = "ZodiacVirgoIcon";
