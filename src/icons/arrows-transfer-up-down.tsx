"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21v-6"}],["path",{"d":"M20 6l-3 -3l-3 3"}],["path",{"d":"M10 18l-3 3l-3 -3"}],["path",{"d":"M7 3v2"}],["path",{"d":"M7 9v2"}],["path",{"d":"M17 3v6"}],["path",{"d":"M17 21v-2"}],["path",{"d":"M17 15v-2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,2,3,4],"o":[7,12],"d":[0,-2.2]},{"fx":"nudge","n":[1,5,6,7],"o":[17,12],"d":[0,2.2]}];

export const ArrowsTransferUpDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsTransferUpDownIcon.displayName = "ArrowsTransferUpDownIcon";
