"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5"}],["path",{"d":"M12.5 21h-4.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.953 -3.959"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.48,14.5],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5.5],[19,19],[17.5,19]]}];

export const MoneybagMoveBackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoneybagMoveBackIcon.displayName = "MoneybagMoveBackIcon";
