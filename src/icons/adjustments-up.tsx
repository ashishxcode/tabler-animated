"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M13.927 15.462a2 2 0 1 0 -1.927 2.538"}],["path",{"d":"M12 4v10"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v3"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,3,5,6,7,8,9],"o":[12,13],"d":[2.2,0]},{"fx":"nudge","n":[10],"o":[19,17.5],"d":[2.2,0]},{"fx":"pop","n":[2,4],"o":[9,12],"a":0.04}];

export const AdjustmentsUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsUpIcon.displayName = "AdjustmentsUpIcon";
