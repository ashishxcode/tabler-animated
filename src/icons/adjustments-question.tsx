"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M13.577 14.77a2 2 0 1 0 .117 2.295"}],["path",{"d":"M12 4v10"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}],["path",{"d":"M12 18v2"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v2"}]];
const rig: Rig[] = [{"fx":"draw","n":[5,6],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"nudge","n":[0,1,3,7,8,9,10],"o":[12,12],"d":[2.2,0]},{"fx":"pop","n":[2,4],"o":[9,12],"a":0.04}];

export const AdjustmentsQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsQuestionIcon.displayName = "AdjustmentsQuestionIcon";
