"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6l8 0"}],["path",{"d":"M16 6l4 0"}],["path",{"d":"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 12l2 0"}],["path",{"d":"M10 12l10 0"}],["path",{"d":"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 18l11 0"}],["path",{"d":"M19 18l1 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,2,3,4,6,8],"o":[12,12],"d":[2.2,0]},{"fx":"nudge","n":[1],"o":[8,6],"d":[2.2,0]},{"fx":"pop","n":[5,7],"o":[12,15],"a":0.04}];

export const AdjustmentsHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsHorizontalIcon.displayName = "AdjustmentsHorizontalIcon";
